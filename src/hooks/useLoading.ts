import {useState} from "react";

const useLoading = (
    asyncCallback: () => Promise<any>,
    resultClearTimeout: number | null = null
): [() => Promise<any>, boolean, any, Error | null] => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [successResult, setSuccessResult] = useState<any>(null);
    const [errorResult, setErrorResult] = useState<Error | null>(null);

    const loadingCallback = () => {
        setIsLoading(true);

        return asyncCallback()
            .then(result => {
                setSuccessResult(result);
            })

            .catch((error: Error) => {
                setErrorResult(error);
            })

            .finally(() => {
                setIsLoading(false);

                if (resultClearTimeout !== null) setTimeout(() => {
                    setSuccessResult(null);
                    setErrorResult(null);
                }, resultClearTimeout)
            })
    }

    return [loadingCallback, isLoading, successResult, errorResult];
}

export default useLoading;