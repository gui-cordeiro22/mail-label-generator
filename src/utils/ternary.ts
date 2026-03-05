export const ternary = <T>(conditions: [boolean, T][]): T | undefined => {
    const verifiedCondition = conditions.find(
        (condition) => condition[0] === true,
    );

    if (verifiedCondition) {
        return verifiedCondition[1];
    }

    return undefined;
};
