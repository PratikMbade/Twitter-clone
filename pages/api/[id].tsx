import Twitterlayout from '@/components/FeedCard/Layout/TwitterLayout';
import type {NextPage} from 'next';
import { BsArrowLeftShort } from 'react-icons/bs';


const UserProfilePage: NextPage = () =>{
    return (
        <div>
            <Twitterlayout>
                <div>
                    <nav className='border flex items-center'>
                        <BsArrowLeftShort className="border flex items-center"/>
                        <div>
                            <h1 className='text-4xl'>Pratik Bade</h1>
                            <h1 className='text-4xl'>102 Tweets</h1>
                        </div>
                    </nav>
                </div>
            </Twitterlayout>
        </div>
    )
}


export default UserProfilePage;