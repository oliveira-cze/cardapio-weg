import WeekDay from "@/src/components/atoms/WeekDay";
import DailyMenu from "@/src/components/organisms/DailyMenu";

export default function WeeklyMenu() {
    return (
        <main
            className="bg-white-system"
        >
            <h2>Weekly Menu</h2>
            <div
                className="grid grid-rows-5 gap-y-10 px-24 py-10 pt-22"
            >
                <div className="">
                    <WeekDay
                        day="Monday"
                    />
                    <DailyMenu />
                </div>

                <div>
                    <WeekDay
                        day="Tuesday"
                    />
                    <DailyMenu />
                </div>

                <div>
                    <WeekDay
                        day="Wednesday"
                    />
                    <DailyMenu />
                </div>

                <div>
                    <WeekDay
                        day="Thursday"
                    />
                    <DailyMenu />
                </div>

                <div>
                    <WeekDay
                        day="Friday"
                    />
                    <DailyMenu />
                </div>
            </div>
        </main>

    )
}