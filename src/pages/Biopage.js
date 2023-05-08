import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Biopage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { status } = state;
  useEffect(() => {
    if (status === 'succeeded') {
      const fullBio = state.bio;
      if (fullBio?.person?.name) {
        const newBio = {
          person: {
            name: fullBio.person.name,
            picture: fullBio.person.picture,
          },
          strengths: fullBio.strengths,
        };
        return (<div>{newBio}</div>);
      }
    }
    return null;
  }, [status, dispatch]);
};

export default Biopage;
