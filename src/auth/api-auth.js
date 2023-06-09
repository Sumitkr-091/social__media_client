const END_POINT = "https://social-media-atth.onrender.com";
const signin = async (user) => {
  try {
    let response = await fetch(`${END_POINT}/auth/signin/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const signout = async () => {
  try {
    let response = await fetch(`${END_POINT}/auth/signout/`, { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { signin, signout };
