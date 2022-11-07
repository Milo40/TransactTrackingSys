const postTransact = async (data) => {
  try {
    const response = await fetch("http://localhost:7000/transactions/add", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response;
  } catch (error) {
    return error;
  }
};

export { postTransact };
