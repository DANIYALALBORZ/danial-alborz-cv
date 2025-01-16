'use client';

const NavbarLinks = () => {
    return (
        <div className="hidden md:inline-block">
            <a className="p-2 mx-2 bg-[#8FB4EA] dark:bg-[#304A65] rounded-lg font-bebasNeue text-2xl dark:text-[#829FC7] text-black bg-none hover:bg-[#829FC7] hover:animate-pulse dark:hover:text-black" href="">Text Me!</a>
            <a className="p-2 mx-2 bg-[#8FB4EA] dark:bg-[#304A65] rounded-lg font-bebasNeue text-2xl dark:text-[#829FC7] text-black bg-none hover:bg-[#829FC7] hover:animate-pulse dark:hover:text-black" href="">About Me</a>
        </div>
    );
};

export default NavbarLinks;
