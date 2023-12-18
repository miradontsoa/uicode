import { CategoryGroup, ComponentCategory } from "@/types"

const categories: ComponentCategory[] = [
    /* {
        slug: "event-item", // grid, list
        items: eventItemComponents,
        ...eventItemInfo
    }, */
    /* {
        slug: "timer", // count down clock
        items: timerComponents,
        ...timerItemInfo
    }, */
    /* {
        slug: "clock",
        items: clockComponents,
        ...clockItemInfo
    }, */
    /* {
        slug: "date-time", // date and/or time display
        items: dateTimeComponents,
        ...dateTimeItemInfo
    }, */
    /* {
        slug: "calendar", // date and/or time display
        items: calendarComponents,
        ...calendarInfo
    }, */
]

export const timeEventGroup: CategoryGroup = {
    title: "Time & Event",
    slug: "time-event",
    description: "Time, Event, Calendar, Date",
    categories,
}