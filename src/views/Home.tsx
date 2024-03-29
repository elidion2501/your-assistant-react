import { Redirect } from 'react-router'

interface Props {
    checkAuth: () => void
}

const Home = (props: Props) => {

    const user = localStorage.getItem('user');

    if (!user) {
        return <Redirect to={"/login"} />
    }

    return (
        <div>
            <h1> Home </h1>
        </div>
    )
}

export default Home
