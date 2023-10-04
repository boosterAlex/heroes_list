export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING',
    };
};

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING',
    };
};

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes,
    };
};
export const filtersFetched = (data) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: data,
    };
};
export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR',
    };
};
export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR',
    };
};
export const heroesDelete = (id) => {
    return {
        type: 'HEROES_DELETED',
        payload: id,
    };
};
export const heroesAdd = (hero) => {
    return {
        type: 'HEROES_ADD',
        payload: hero,
    };
};
export const activeFilterChanged = (filters) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: filters,
    };
};
