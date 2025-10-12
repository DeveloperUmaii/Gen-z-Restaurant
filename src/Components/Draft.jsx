git add .
git commit -m"L"
git push

upDateUserProfileNow(displayName, photoURL)
  .then(() => {
    const updatedUser = auth.currentUser; // এখনকার ইউজার
    setUser(updatedUser); // ইউজার context এ বসাও
    console.log({ displayName, photoURL });
  })

  