const delTransact = async (id) => {
  try {
    const response = await fetch("http://localhost:7000/transactions/" + id, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: null,
    });
    return await response;
  } catch (error) {
    return error;
  }
};

export { delTransact };
