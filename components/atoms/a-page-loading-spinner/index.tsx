function PageLoadingSpinner() {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-600 opacity-90">
            <div className="mb-4 h-14 w-14 animate-spin rounded-full border-[5px] border-t-[5px] border-white border-t-[#0D9589] ease-linear" />
            <p className="w-full text-center text-lg italic text-white">Loading...</p>
        </div>
    );
    // idea: code source https://codepen.io/duncanmcclean/pen/GRoRRdR
}
export default PageLoadingSpinner;
