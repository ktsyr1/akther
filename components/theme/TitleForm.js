function TitleForm(props) {
    return (
        <>
            <h1 className="text-center text-xl">{props.data}</h1>
            <div className="center box">
                <br className="text-ui-1 m-2 center w-[150px] " />
            </div>
        </>
    );
}

export default TitleForm;