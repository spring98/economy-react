export function countAction(diff: number) {
    return ({
        type: 'INCREASE_BY',
        payload: diff
    });
}

export type CountActionType = ReturnType<typeof countAction>;
