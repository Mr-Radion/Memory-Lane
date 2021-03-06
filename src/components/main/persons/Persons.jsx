import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Sorting from "../generalUi/sorting/Sorting";
import "./PersonsCatalog.sass";


class Persons extends Component {
  constructor(props) {
    super(props);
    this.setGridType = this.setGridType.bind(this);
    this.state = {
      styleType: 'personWrapMiddle',
      nameType: 'nameMiddle',
      descType: 'descMiddle'

    };
  }
  setGridType(gridId) {
	  switch (gridId) {
	    case 1:
      this.setState({styleType: 'personWrapBig'});
      this.setState({nameType: 'nameBig'});
      this.setState({descType: 'descBig'});
	      break;
	    case 2:
      this.setState({styleType: 'personWrapMiddle'});
      this.setState({nameType: 'nameMiddle'});
      this.setState({descType: 'descMiddle'});
	      break;
	    case 3:
      this.setState({styleType: 'personWrapSmall'});
      this.setState({nameType: 'nameSmall'});
      this.setState({descType: 'descSmall'});
	      break;
	    default:
	      return;
	  }
  }

  render() {
    const { loading } = this.props;
    const userPersons = this.props.persons;
	  const personItems = userPersons.map(item =>
      (<div key={item.id}>
        <Link className='persons__link' to={`/persons/${item.id}`}>
          <img className={(this.state.styleType + '__img') } src={(item.ico_url.length > 0) ? item.ico_url : 'http://placehold.it/365x365'} alt='persons icon'/>


        </Link>
        <div className={('persons__align persons__name ' + this.state.nameType )}>
          {item.last_name}  {item.first_name} {item.patronymic}
        </div>
        <div className={('text1 persons__align ' + this.state.descType)}>
          {item.images ? item.images.length : 'Нет связанных фотографий'}
        </div>
        {/* <div className='text1 persons__align'>
        4 истории
        </div>*/}
      </div>
      )
    );

    return (
      loading
        ?
        <div>loading</div>
        :
        <div className='persons'>
          <Sorting
            currentPage='persons'
            setGridType={this.setGridType}
          />
          <div className={this.state.styleType}>
            {personItems}
          </div>
        </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    persons: state.persons.persons,
    sessionID: state.session.sessionID,
    loading: state.persons.loading,
  };
};

export default connect(mapStateToProps)(Persons);
