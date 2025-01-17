import Header from './components/Main/Header/page'
import MyStrength from './components/Main/MyStrengths/page'
import MyAchievements from './components/Main/MyAchievements/page'
import Brands from './components/Main/Brands/page'
import MyImpact from './components/Main/MyImpact/page'

const page = () => {

    return (
        <>
            <Header />

            <Brands />

            <main className="bg-[#DCF2F6] dark:dark:bg-[#166eb148] py-8 -z-30">

                <MyStrength />

                <MyAchievements />

                <MyImpact />

            </main>
        </>
    );
}

export default page;