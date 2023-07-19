import { compareAsc } from "date-fns";
import add from 'date-fns/add'

const checkDueDate = (() => {
    let date = new Date();
    let currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let weekBoundary = add(currentDate, {
        years: 0,
        months: 0,
        weeks: 1,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const overdue = (todoDate) => {
        if (compareAsc(currentDate, todoDate) == 1) {
            return true;
        } else {
            return false;
        }
    }

    const dueToday = (todoDate) => {
        if (overdue(todoDate)) {
            return false;
        } else {
            if (compareAsc(currentDate, todoDate) == 0) {
                return true;
            } else {
                return false;
            }
        }

    }

    const dueThisWeek = (todoDate) => {
        let array = [currentDate, todoDate, weekBoundary];
        array.sort(compareAsc);
        if (array[1] == todoDate) {
            return true;
        } else {
            return false;
        }
    }

    return { currentDate, overdue, dueToday, dueThisWeek }
})();

export { checkDueDate }