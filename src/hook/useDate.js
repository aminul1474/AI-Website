function useDate(addNextPrivius) {
    let crDate = new Date();
    crDate.setDate(crDate.getDate() + addNextPrivius);
    const customDate = crDate.toDateString();

    return [customDate]
}

export default useDate
