import React, { Component } from "react";

// import styled from 'styled-components';

import { connect } from "react-redux";

import { getAlbums } from "../../../../../redux/actions/actionAlbums";
import { modalClose } from "../../../../../redux/actions/modalClose";

import Portal from "../Portal";

import { ButtonContainer } from "../../Button";

import ChooseAlbumSearch from "./ChooseAlbumSearch";
import AlbumItem from "./ChooseAlbumItemAlbum";

import "./ChooseAlbum.sass";

class ModalChoosePhoto extends Component {
  render() {
    const { modalOpened, modalType, closeModal, albums } = this.props;

    console.log("ChooseAlbum", 25, this.props);

    // const albumItems = albums.map(album =>
    //   <button
    //     key={album.id}
    //     className='dropdown-albums-btn'
    //     onClick={openModalChooseAlbum}
    //   >
    //     {album.album_name}
    //   </button>
    // );

    const storiesAlbums = Object.values(albums).map((album) => (
      <AlbumItem
        key={album.id}
        id={album.id}
        title={album.album_name}
        // picture={album.ico_url}
      />
    ));

    return (
      <>
        {modalOpened && (
          <Portal>
            <div className="modalOverlay">
              <div className="modalWindow">
                <div className="modalHeader">
                  Выберите альбом
                  <button
                    className="times"
                    onClick={(e) => closeModal(modalType)}
                  />
                </div>
                <div className="modalBody">
                  <div className="searchAndNewAlbum">
                    <ChooseAlbumSearch />
                  </div>
                  <div className="albums">{storiesAlbums}</div>
                </div>
                <div className="modalFooter">
                  <div className="modalContentBottom">
                    <button
                      className="cancel-btn"
                      onClick={(e) => closeModal(modalType)}
                    >
                      Отмена
                    </button>

                    <ButtonContainer>Выбрать</ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessionID: state.session.sessionID,
    albums: state.albums.albums,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (type) => {
      dispatch(modalClose(type));
    },
    downloadAlbums: () => {
      dispatch(getAlbums());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalChoosePhoto);
