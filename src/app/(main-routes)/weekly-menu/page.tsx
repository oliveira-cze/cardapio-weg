import DailyMenu from "@/src/components/organisms/DailyMenu";

const days: string[] = ["monday", "tursday", "wednesday", "thursday", "friday"]

export default function WeeklyMenu() {
    return (
        <main
            className="bg-white-system flex flex-col items-center py-8 pb-10"
        >
            <div
                className="grid grid-rows-5 gap-y-10 px-24"
            >
                {days.map((day) => {
                    return (
                        <DailyMenu
                            day={day}
                        />
                    )
                })}
            </div>
        </main>

    )
}