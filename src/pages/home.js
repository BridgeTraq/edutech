import Head from "../components/head";
import DisplayAreaGrey from "../components/display-area";
import Stats from "../components/stats";
import { User } from "../components/users";
import Image from '../images/woman-dp.png'
import Item from "../components/item";
import { LiaEllipsisVSolid, LiaAngleDownSolid } from "react-icons/lia";
import Recommendation from "../components/recommendation";
import { Recommendations } from "../components/recommendations";
import { BarChart, CartesianGrid, ResponsiveContainer, Bar, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Sun 15', pv: 13 },
    { name: '', pv: 19 },
    { name: '', pv: 8 },
    { name: '', pv: 24, px: 15 },
    { name: '', pv: 17 },
    { name: '', pv: 13 },
    { name: 'Sat 20', pv: 21 },
];



export default function Home() {

    const title = `Welcome back, ${User.firstName} 👋`;
    return (
        <>
            <Head title={title} user={User} image={Image} />

            <DisplayAreaGrey>
                <section className="flex gap-x-5">
                    <div className="flex flex-col gap-y-5 rounded-lg basis-[70%]">
                        <div className="grid grid-cols-3 gap-x-4">
                            <Stats theme={"#4D9893"} iconName={"LiaGraduationCapSolid"} amount={24} title={"Enrolled Course"} />
                            <Stats theme={"#A27CFF"} iconName={"LiaBookSolid"} amount={56} title={"Lesson"} />
                            <Stats theme={"#FF8355"} iconName={"LiaCertificateSolid"} amount={17} title={"Certificates"} />
                        </div>
                        <div className="rounded-lg bg-white py-6 px-5">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold">Continue Learning</h3>
                                <span className="border rounded-lg text-gray-600 px-3 py-1 text-[.95rem]">See All</span>
                            </div>

                            <div className="flex justify-between bg-[#F8F9FB] rounded-lg py-2 px-4 mt-4 mb-1">
                                <span className="text-gray-600 font-semibold basis-[36%]">Course Name</span>
                                <span className="text-gray-600 font-semibold basis-[30%]">Progress</span>
                                <span className="text-gray-600 font-semibold basis-[28%]">Status</span>
                            </div>
                            <Item theme={"#39D0FB"} title={"Design Accesibility"} iconName={"LiaHornbill"} category={"Advance"} duration={5} progress={30} status={"in progress"} />
                            <hr className="border-dashed border-[1px]" />
                            <Item theme={"#A27CFF"} title={"UX Research"} iconName={"LiaCubesSolid"} category={"Intermediate"} duration={6} progress={70} status={"in progress"} />
                            <hr className="border-dashed border-[1px]" />
                            <Item theme={"#000000"} title={"Design Accesibility"} iconName={"LiaFigma"} category={"Beginner"} duration={7} progress={100} status={"completed"} />
                        </div>

                    </div>

                    <div className="flex flex-col rounded-lg bg-white py-4 px-5 basis-[30%]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold">Progress</h3>
                            <span className="border rounded-lg text-gray-600 px-1 py-1">
                                <LiaEllipsisVSolid />
                            </span>
                        </div>

                        <div className="user-profile flex flex-col justify-center items-center mt-1 mb-3 gapy-1">
                            <img src={Image} alt={User.firstName + " " + User.lastName} className="w-[90px] h-[90px] rounded-full object-cover border border-3 border-gray-200 p-4 bg-white mb-1" />
                            <span className="text-xl font-semibold">{User.firstName} {User.lastName}</span>
                            <span className="text-gray-600">{User.membership}</span>
                        </div>

                        <div className="flex flex-col chart-section rounded-lg bg-[#F8F9FB] p-4 grow">
                            <div className="flex items-start justify-between">
                                <span className="flex flex-col">
                                    <span className="text-lg font-semibold">30</span>
                                    <span className="text-gray-600 text-[.9rem]">Hours speed</span>
                                </span>
                                <span className="flex items-center gap-x-2 border rounded-lg text-gray-600 px-2 py-1">
                                    <span className="text-[.9rem]">This week</span>
                                    <LiaAngleDownSolid className="text-[.7rem]" />
                                </span>
                            </div>

                            <div className="grow p-3 ">
                                <ResponsiveContainer width={"100%"} height={"100%"}>
                                    <BarChart
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 5,
                                            left: -30,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />
                                        <XAxis dataKey="name" tick={{ dy: 5 }} tickLine={false} axisLine={false} />
                                        <YAxis ticks={[0, 15, 30]} tick={{ dx: -5 }} tickLine={false} axisLine={false} />
                                        <Bar dataKey="pv" fill="#084B44" radius={[5, 5, 0, 0]} margin={[4, 5, 6, 4]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="recommendations rounded-lg bg-white p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">Recommended for you</h3>
                        <span className="border rounded-lg text-gray-600 px-3 py-1">See All</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 mt-7">
                        <Recommendation {...Recommendations[0]} />
                        <Recommendation {...Recommendations[1]} />
                        <Recommendation {...Recommendations[2]} />
                    </div>


                </section>

            </DisplayAreaGrey >
        </>
    );
}