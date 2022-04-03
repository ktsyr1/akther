import TitleForm from "components/theme/form";

const Repassword = () => {
    return (
        <>
            <form className="ui w-[300px] p-4 m-auto">
                <TitleForm data={'استعادة كلمة المرور'} />
                {/* email */}
                <div className="py-2">
                    <p className="text-xs px-2 ">الايميل</p>
                    <input type="email" name="email" className="w-full " />
                </div>

                <button onClick={send} type='button'>ارسال  </button>
            </form>
        </>
    );
};

export default Repassword;

function send() {
    let Data = {
        email: document.forms[0].elements.email.value,
    }

    document.querySelector('section button').textContent = 'تم الارسال'
    return
} 