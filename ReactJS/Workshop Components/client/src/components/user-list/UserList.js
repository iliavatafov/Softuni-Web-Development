import { useState, useEffect } from "react";

import * as userService from "../../services/userService";

import { UserActions } from "./UserListConstants";
import { UserDetails } from "./user-details/UserDetails";
import { UserEdit } from "./user-edit/UserEdit";
import { UserItem } from "./user-item/UserItem";
import { UserCreate } from "./user-create/UserCreate";
import { UserDelete } from "./user-delete/UserDelte";

export const UserList = () => {
  const [userAction, setUserAction] = useState({ user: null, action: null });
  const [users, setUsers] = useState({});

  useEffect(() => {
    userService.getAll().then((result) => {
      setUsers(result);
    });
  }, []);

  const userActionClickHandler = (userId, actionType) => {
    if (userId === null) {
      setUserAction({
        action: actionType,
      });
    } else {
      userService.getOne(userId).then((user) => {
        setUserAction({
          user,
          action: actionType,
        });
      });
    }
  };

  const closeHandler = () => {
    setUserAction({ user: null, action: null });
  };

  const deleteHandler = (userId) => {
    userService.del(userId);
    userService.getAll().then((result) => {
      setUsers(result);
    });
    closeHandler();
  };

  const userCreateHandler = (e, data) => {
    e.preventDefault();

    data = Object.entries(data);

    const { firstName, lastName, email, imageUrl, phoneNumber, ...address } =
      Object.fromEntries(data);

    const userData = {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      address,
    };

    userService.create(userData).then((user) => {
      setUsers((state) => ({
        ...state,
        user,
      }));

      closeHandler();
    });
  };

  const userEditHandler = (e, data) => {
    e.preventDefault();

    data = Object.entries(data);

    const { firstName, lastName, email, imageUrl, phoneNumber, ...address } =
      Object.fromEntries(data);

    const userData = {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      address,
    };

    userService.edit(userAction.user._id, userData).then((res) => {
      let newUsers = users.map((u) => (u._id === res._id ? (u = res) : u));
      setUsers((oldUsers) => (oldUsers = newUsers));
      closeHandler();
    });
  };

  return (
    <>
      <div className="table-wrapper">
        {userAction.action === UserActions.Details && (
          <UserDetails user={userAction.user} onClose={closeHandler} />
        )}

        {userAction.action === UserActions.Add && (
          <UserCreate onClose={closeHandler} onUserCreate={userCreateHandler} />
        )}

        {userAction.action === UserActions.Edit && (
          <UserEdit
            user={userAction.user}
            onClose={closeHandler}
            onEdit={userEditHandler}
          />
        )}

        {userAction.action === UserActions.Delete && (
          <UserDelete
            user={userAction.user}
            onClose={closeHandler}
            onDelete={deleteHandler}
          />
        )}

        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Table row component --> */}
            {Object.values(users).length > 1 &&
              Object.values(users).map((user) => {
                return (
                  <tr key={user._id}>
                    <UserItem
                      user={user}
                      onActionClick={userActionClickHandler}
                    />
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <button
        className="btn-add btn"
        onClick={() => userActionClickHandler(null, UserActions.Add)}
      >
        Add new user
      </button>
    </>
  );
};
