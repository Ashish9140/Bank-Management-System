import axios from "axios";
// create user
export const createUser = (userData, history) => async (dispatch) => {
  try {
    const userInfo = await axios({
      method: "post",
      url: "http://localhost:3001/signup",
      data: userData,
    });
    if (userInfo.data.error) {
      dispatch({ type: "HANDLE_ERROR", payload: userInfo.data.error });
    }
    dispatch({ type: "CREATE_USER", payload: userInfo.data });
  } catch (e) {
    history.push("/signup");
  }
};
export const logInUser = (userData, history) => async (dispatch) => {
  try {
    const user = await axios({
      method: "post",
      url: "http://localhost:3001/login",
      data: userData,
    });
    if (user.data.error) {
      dispatch({ type: "HANDLE_ERROR", payload: user.data.error });
    }
    dispatch({ type: "CREATE_USER", payload: user.data });
  } catch (e) {
    history.push("/signin");
  }
};

// find user
export const getUser = (token, history) => async (dispatch) => {
  try {
    const user = await axios({
      method: "get",
      url: "http://localhost:3001/user",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: "GET_USER", payload: user.data });
  } catch (e) {
    history.push("/signup");
  }
};

export const transactionUpdate = (transactionData) => async (dispatch) => {
  try {
    const user = await axios({
      method: "patch",
      url: "http://localhost:3001/user",
      data: {
        transactionHistory: [transactionData],
        accountBal: transactionData.finalBal,
      },
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    dispatch({ type: "UPDATE_TRANSACTION", payload: user.data });
  } catch (e) {
    console.log(e);
  }
};

export const updateUserProfile = (updatedInfo) => async (dispatch) => {
  try {
    const user = await axios({
      method: "patch",
      url: "http://localhost:3001/user",
      data: { ...updatedInfo },
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    dispatch({ type: "UPDATE_PROFILE", payload: user.data });
  } catch (e) {
    dispatch({ type: "HANDLE_ERROR", payload: e.message });
  }
};

export const updatePfp = (pfp) => async (dispatch) => {
  try {
    var form = new FormData();
    form.append("pfp", pfp);
    const user = await axios({
      method: "post",
      url: "http://localhost:3001/user/pfp",
      data: form,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (user.data.error) {
      dispatch({ type: "HANDLE_ERROR", payload: user.data.error });
    }
    dispatch({ type: "UPDATE_PROFILE", payload: user.data });
  } catch (e) {
    console.log(e);
  }
};

export const cardApply = (cardInfo) => async (dispatch) => {
  try {
    const user = await axios({
      method: "patch",
      url: "http://localhost:3001/user",
      data: { cardInfo },
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    dispatch({ type: "APPLY_CARD", payload: user.data });
  } catch (e) {
    console.log(e);
  }
};

export const updateKyc = (kyc) => async (dispatch) => {
  try {
    var form = new FormData();
    form.append("idCard", kyc);
    const user = await axios({
      method: "post",
      url: "http://localhost:3001/user/idCard",
      data: form,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (user.data.error) {
      dispatch({ type: "HANDLE_ERROR", payload: user.data.error });
    }
    dispatch({ type: "UPDATE_KYC", payload: user.data });
  } catch (e) {
    console.log(e);
  }
};

export const changePassword =
  ({ oldPassword, newPassword }) =>
  async (dispatch) => {
    try {
      const user = await axios({
        method: "patch",
        url: "http://localhost:3001/password",
        data: { password: { oldPassword, newPassword } },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (user.data.error) {
        dispatch({ type: "HANDLE_ERROR", payload: user.data.error });
      }
      dispatch({type: "CHANGE_PASSWORD", payload: user.data})
    } catch (e) {
      console.log(e);
    }
  };
