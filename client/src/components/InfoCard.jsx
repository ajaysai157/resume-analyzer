const InfoCard = ({
    title,
    icon,
    items,
    color,
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-3 mb-5">

                <span className="text-3xl">
                    {icon}
                </span>

                <h2
                    className={`text-xl font-bold ${color}`}
                >
                    {title}
                </h2>

            </div>

            <ul className="space-y-3">

                {items.map((item, index) => (

                    <li
                        key={index}
                        className="flex gap-3"
                    >

                        <span className={color}>
                            •
                        </span>

                        <span className="text-gray-700">
                            {item}
                        </span>

                    </li>

                ))}

            </ul>

        </div>
    );
};

export default InfoCard;