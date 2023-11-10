import React from "react";
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>Users 1</div>
      <div>Users 2</div>
      <div>Users 3</div>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filters</button>
      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing All Users</h2>
      )}
    </>
  );
};

export default Users;
