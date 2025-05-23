// components/TeamSection.tsx - Simpler version without framer-motion
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Oliver Anderson',
        role: 'CEO',
        imageUrl: '/images/teams/teammer1.png', // You'll need to add these images to your public folder
    },
    {
        id: 2,
        name: 'Ethan Mitchell',
        role: 'CTO',
        imageUrl: '/images/teams/teammer2.png',
    },
    {
        id: 3,
        name: 'Maxim Bennett',
        role: 'Director',
        imageUrl: '/images/teams/teammer3.png',
    },
    {
        id: 4,
        name: 'Anastasia Kuznetsova',
        role: 'CMO',
        imageUrl: '/images/teams/teammer7.png',
    },
    {
        id: 5,
        name: 'Quiana Berry',
        role: 'PM',
        imageUrl: '/images/teams/teammer5.png',
    },
    {
        id: 6,
        name: 'Arnold Schwarzenegger',
        role: 'CFO',
        imageUrl: '/images/teams/teammer6.png',
    },
    {
        id: 7,
        name: 'Reonardo Da Vinci',
        role: 'HR',
        imageUrl: '/images/teams/teammer4.png',
    },
    {
        id: 8,
        name: 'Ava Reynolds',
        role: 'PMO',
        imageUrl: '/images/teams/teammer8.png',
    },
];

const TeamSection: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);
    const [selectLeftMember, setSelectLeftMember] = useState<TeamMember>(teamMembers[0]);
    const [selectRightMember, setSelectRightMember] = useState<TeamMember>(teamMembers[4]);
    // Split the team members into two halves for desktop layout
    const leftSideMembers = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
    const mobileleftSideMembers = teamMembers.slice(0, Math.ceil(teamMembers.length / 4));
    const rightSideMembers = teamMembers.slice(Math.ceil(teamMembers.length / 2));
    const mobilerightSideMembers = teamMembers.slice(Math.ceil(teamMembers.length / 4), 4);

    // Desktop team member item component
    const DesktopTeamMemberItem = ({ member }: { member: TeamMember }) => (
        <div
            className={`flex justify-between items-center py-6 px-6 mb-4 rounded-lg cursor-pointer transition-colors ${selectedMember.id === member.id
                ? 'bg-gray-800'
                : 'bg-gray-800/30 hover:bg-gray-800/50'
                }`}
            onClick={() => setSelectedMember(member)}
        >
            <span className="text-gray-300 text-lg">{member.role}</span>
            <span className="text-white text-lg">{member.name}</span>
        </div>
    );
    const MobileLeftMemberItem = ({member}:{member:TeamMember}) => (
        <div
        className={`flex flex-col justify-between items-start py-6 px-6 mb-4 rounded-lg cursor-pointer transition-colors ${selectedMember.id === member.id
            ? 'bg-gray-800'
            : 'bg-gray-800/30 hover:bg-gray-800/50'
            }`}
        onClick={() => setSelectLeftMember(member)}
    >
        <span className="text-gray-300 text-lg">{member.role}</span>
        <span className="text-white text-lg">{member.name}</span>
    </div>
    )
    const MobileRightMemberItem =({member}:{member:TeamMember}) => (
        <div
        className={`flex flex-col justify-between items-start py-6 px-6 mb-4 rounded-lg cursor-pointer transition-colors ${selectedMember.id === member.id
            ? 'bg-gray-800'
            : 'bg-gray-800/30 hover:bg-gray-800/50'
            }`}
        onClick={() => setSelectRightMember(member)}
    >
        <span className="text-gray-300 text-lg">{member.role}</span>
        <span className="text-white text-lg">{member.name}</span>
    </div>
    )

    return (
        <div className="w-full bg-gray-900 container mx-auto py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-3xl md:text-4xl font-light mb-8 md:mb-12">Our team</h2>

                {/* Desktop Layout - Three column layout with centered image */}
                <div className="hidden md:flex flex-row gap-8 items-center">
                    {/* Left side: First half of team members */}
                    <div className="flex-1 flex flex-col justify-center">
                        {leftSideMembers.map(member => (
                            <DesktopTeamMemberItem key={member.id} member={member} />
                        ))}
                    </div>

                    {/* Center: Selected member image */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden">
                            <Image
                                src={selectedMember.imageUrl}
                                alt={selectedMember.name}
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 33vw, 100vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right side: Second half of team members */}
                    <div className="flex-1 flex flex-col justify-center">
                        {rightSideMembers.map(member => (
                            <DesktopTeamMemberItem key={member.id} member={member} />
                        ))}
                    </div>
                </div>
                {/* Desktop Layout - Three column layout with centered image */}
                <div className="flex md:hidden w-full flex-col gap-4 items-center">
                    <div className="flex w-full justify-between gap-4 item-center">
                        {/* Left side: First half of team members */}
                        <div className="flex-1 flex flex-col justify-center">
                            {mobileleftSideMembers.map(member => (
                                <MobileLeftMemberItem key={member.id} member={member} />
                            ))}
                        </div>
                        {/* Right: Selected member image */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden">
                                <Image
                                    src={selectLeftMember.imageUrl}
                                    alt={selectLeftMember.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 150px) 33vw, 100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-between gap-4 item-center">

                        {/* Right side: Second half of team members */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden">
                                <Image
                                    src={selectRightMember.imageUrl}
                                    alt={selectRightMember.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 150px) 33vw, 100vw"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            {mobilerightSideMembers.map(member => (
                                <MobileRightMemberItem key={member.id} member={member} />
                            ))}
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamSection;