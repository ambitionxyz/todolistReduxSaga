import { connect } from "react-redux";

import { fetchRequest, deleteRequest } from "../saga/toDoList/toDoList.action";

import listComponent from "../pages/List/List.component";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (params) => dispatch(fetchRequest(params)),
    onDelete: (params) => dispatch(deleteRequest(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(listComponent);
