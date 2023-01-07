import { v4 as uuidv4 } from 'uuid';

const uuid = () => {
    const uID = uuidv4();
    return uID;
};

export default uuid;
