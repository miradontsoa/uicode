import { CategoryGroup, ComponentCategory } from "@/types"

const categories: ComponentCategory[] = [
    /* {
        slug: "kanban", // kanban card
        items: kanbanComponents,
        ...kanbanInfo
    }, */
    /* {
        slug: "task-list", // ctask list, task item
        items: taskListComponents,
        ...taskListInfo
    }, */
    /* {
        slug: "sticky-note",
        items: stickyNoteComponents,
        ...stickyNoteInfo
    }, */ 
    /* {
        slug: "gantt",
        items: ganttComponents,
        ...ganttInfo
    }, */ 
]

export const projectTaskGroup: CategoryGroup = {
    title: "Project & Task",
    slug: "project-task",
    description: "Project, task, assignment",
    categories,
}