import jwt_decode from 'jwt-decode';
import { client } from "../client";
import { useNavigate } from 'react-router-dom';

const useCreateOrGetUser = () => {
    const navigate = useNavigate();

    const createOrGetUser = async (response) => {
        const decoded = jwt_decode(response.credential);
        const { name, picture, sub } = decoded;
        console.log(picture)
        // Check if user already exists by querying the Sanity dataset
        const existingUser = await client.fetch(`*[_type == 'user' && _id == $sub][0]`, { sub });

        if (!existingUser) {
            // User doesn't exist, create a new user document
            const newUser = {
                _id: sub,
                _type: 'user',
                userName: name,
                image: picture,
            };

            await client.create(newUser);
        }

        // After either creating or verifying user, navigate
        navigate('/', { replace: true });
    };

    return createOrGetUser;
};

export default useCreateOrGetUser;
