import Image from "next/image";

export const ProfileImage = () => {
    return (
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-border-color shadow-lg">
            <Image
                src="/images/profile/env.jpg"
                alt="Envi Daniel Profile"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
};