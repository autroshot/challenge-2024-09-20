export default function EmailForm() {
    return (
        <form action="" noValidate onSubmit={handleSubmit}>
            <div>
                <label
                    htmlFor="email"
                    className="font-exo-2 text-base font-bold leading-normal tracking-[-0.015rem] text-white"
                >
                    Subscribe to our newsletter
                </label>
            </div>
            <div className="mt-4">
                <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
        </form>
    );

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
        };
        const email = target.email.value;

        alert(`Your subscription is complete with an email to ${email}`);
    }
}
