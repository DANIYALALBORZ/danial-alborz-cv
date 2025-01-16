import Header from './components/Main/Header/page'

const page = () => {
    return (
        <>

            <Header />

            <img className="brands-bar" src="/img/brands.svg" alt="" />

            <main className="bg-[#DCF2F6] dark:dark:bg-[#166eb148] py-8">

                {/* <!-- My STRENGTHS --> */}
                <div className="strengths-container">

                    <p className="text-white text-center md:text-3xl lg:text-4xl">MY STRENGTHS</p>

                    <div className="strengths-ul">

                        <div className="strengths-li">
                            <img className="strengths-li-img" src="/img/organized.png" alt="" />
                            <p className="text-white text-center">ORGANIZED</p>
                        </div>

                        <div className="strengths-li">
                            <img className="strengths-li-img" src="/img/skillful.png" alt="" />
                            <p className="text-white text-center">SKILLFULL</p>
                        </div>

                        <div className="strengths-li">
                            <img className="strengths-li-img" src="/img/motivated.png" alt="" />
                            <p className="text-white text-center">MOTIVATED</p>
                        </div>

                    </div>

                </div>
                {/* <!--End My STRENGTHS --> */}

                {/* <!-- My Achievements --> */}
                <div className="ach-body">
                    <p className="ach-title">MY ACHIEVEMENTS</p>

                    <p className="ach-sign">Over 5 years with companies</p>

                    <p className="ach-desc">
                        "My skills encompass management, ideation, branding and brand development, employee psychology, game
                        development and website development. i'm the founder here and will personally oversee the process of
                        advancing your business"
                    </p>

                    <a className="ach-btn" href="#">Introduce More</a>
                </div>

                <div className="ach-footer">
                    <div
                        className="ach-footer-box rounded-se-[5rem] rounded-es-[5rem] lg:rounded-es-[5rem] lg:rounded-ss-[5rem] lg:rounded-se-none">
                        <p className="ach-box-title">+48,000</p>
                        <p className="ach-box-desc">
                            over 5 years working with companies
                        </p>
                    </div>
                    <div className="ach-footer-box rounded-ee-[5rem] rounded-ss-[5rem] lg:rounded-none">
                        <p className="ach-box-title">+100</p>
                        <p className="ach-box-desc">
                            Since 2022 we get +100 projects done.
                        </p>
                    </div>
                    <div className="ach-footer-box rounded-ss-[5rem] rounded-ee-[5rem] lg:rounded-none">
                        <p className="ach-box-title">+1000</p>
                        <p className="ach-box-desc">
                            +1000 Satisfied customers
                        </p>
                    </div>
                    <div
                        className="ach-footer-box rounded-se-[5rem] rounded-es-[5rem] lg:rounded-ee-[5rem] lg:rounded-se-[5rem] lg:rounded-es-none">
                        <p className="ach-box-title">10%</p>
                        <p className="ach-box-desc">
                            Spend 10% of the projects money on charity
                        </p>
                    </div>
                </div>
                {/* <!-- End My Achievements --> */}

                {/* <!-- My impact --> */}
                <img className="impact-img" src="/img/danial-alborz.jpg" alt="" />

                <div className="impact-container">

                    <p className="impact-title">MY IMPACT</p>

                    <p className="impact-sign">+57 FEEL CREATED</p>

                    <p className="impact-desc">
                        I believe in the power of imagination.
                        i will transform your ideas and dreams into reality.
                        dedicated professionals work hand-in-hand with you to ensure that every details aligns with your vision.
                        with a focus on quality and innovation, i bring your concepts to life in ways that exceed your
                        exceptions.
                    </p>

                    <div className="impact-box">

                        <div className="impact-box-li rounded-se-[5rem] rounded-es-[5rem]">
                            <img width="64" height="64" src="/img/member.png" alt="" />
                            <p className="impact-box-title">1,826</p>
                            <p className="impact-box-desc">
                                connected to more than 1,500 Employer and Employee
                            </p>
                        </div>

                        <div className="impact-box-li rounded-ee-[5rem] rounded-ss-[5rem]">
                            <img width="64" height="64" src="/img/new.png" alt="" />
                            <p className="impact-box-title">28</p>
                            <p className="impact-box-desc">
                                +20 Companies are ready to help grow your business
                            </p>
                        </div>

                    </div>

                    <a className="bg-[#166FB1] p-4 rounded-2xl text-white font-mono font-bold text-xl lg:text-[1.2rem] shadow-lg w-fit"
                        href="#">Let's make a Feel!</a>

                </div>

                {/* <!-- End My impact --> */}

            </main>
        </>
    );
}

export default page;