const getUserBio = async (username = 'olarmmi') => {
 try {
    const response = await fetch(`http://localhost:8080/bios/${username}`);
    const data = await response.json();
    return data;
 } catch (error) {
    return error.message;
 }
  };