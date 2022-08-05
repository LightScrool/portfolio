import {useState} from "react";

const useLoading = <T>(
    asyncCallback: () => Promise<T>,
    resultClearTimeout: number | null = null
): [() => Promise<T | Error>, boolean, T | null, Error | null] => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [successResult, setSuccessResult] = useState<T | null>(null);
    const [errorResult, setErrorResult] = useState<Error | null>(null);

    const loadingCallback = () => {
        setIsLoading(true);

        return asyncCallback()
            .then(result => {
                setSuccessResult(result);
                return result;
            })

            .catch((error: Error) => {
                setErrorResult(error);
                return error
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