export function updateState(values) {
    return {
        type: 'UPDATE_STATE',
        payload: { ...values },
    };
}
  
export function reset() {
    return {
        type: 'RESET',
    };
}
  