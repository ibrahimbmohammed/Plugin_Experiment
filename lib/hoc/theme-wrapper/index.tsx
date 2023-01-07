// import type { NextPageContext } from 'next';

function WithWrapper(WrappedComponent: any) {
    const withThing = (props: any) => {
        return <WrappedComponent {...props} />;
    };

    return withThing;
}
export default WithWrapper;
