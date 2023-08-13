import sites from "../sites";

export const GetSites = () => async dispatch => {

    function shuffleArray(sites) {
        for (var i = sites.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = sites[i];
            sites[i] = sites[j];
            sites[j] = temp;
        }
    }

    shuffleArray(sites);

    dispatch({ type: 'GET_SITES', payload: sites});

};