import { compareAsc } from "date-fns";

const checkDueDate = (() => {
    let currentDate = new Date();

    const duePast = (todoDate) => {
        if (compareAsc(currentDate, todoDate)) {
            console.log('not past');
        } else {
            console.log('past');
        }
    }

    return { duePast }
})();

export { checkDueDate }