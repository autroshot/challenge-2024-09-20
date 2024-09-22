import paperPlaneUrl from '@/assets/paper-plane.svg';
import { useState } from 'react';

export default function EmailForm() {
    const [value, setValue] = useState('');

    const inputVariants = {
        default:
            'h-[3.125rem] w-[31.25rem] rounded-[7px] border border-solid border-white bg-[#ffffff1a] py-4 pl-4 pr-[3.125rem] font-exo-2 text-base tracking-[-0.015rem] text-white backdrop-blur-[0.625rem] placeholder:font-exo-2 placeholder:text-base placeholder:tracking-[-0.015rem] placeholder:text-white focus:outline-none',
        valid: 'h-[3.125rem] w-[31.25rem] rounded-[7px] border border-solid border-[#00C300] bg-[#ffffff1a] py-4 pl-4 pr-[3.125rem] font-exo-2 text-base tracking-[-0.015rem] text-white backdrop-blur-[0.625rem] placeholder:font-exo-2 placeholder:text-base placeholder:tracking-[-0.015rem] placeholder:text-white focus:outline-none',
        inValid:
            'h-[3.125rem] w-[31.25rem] rounded-[7px] border border-solid border-[#FF6633] bg-[#ffffff1a] py-4 pl-4 pr-[3.125rem] font-exo-2 text-base tracking-[-0.015rem] text-white backdrop-blur-[0.625rem] placeholder:font-exo-2 placeholder:text-base placeholder:tracking-[-0.015rem] placeholder:text-white focus:outline-none',
    };

    const isEmpty = value.length === 0;
    const isValid = validateEmail(value);
    console.log(isValid);

    const inputClass = isEmpty ? inputVariants.default : isValid ? inputVariants.valid : inputVariants.inValid;

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
            <div className="mt-4 flex justify-center">
                <div className="relative w-max">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={value}
                        onChange={handleChange}
                        className={inputClass}
                    />
                    <button type="submit" className="absolute inset-y-0 right-[10px]" disabled={isEmpty || !isValid}>
                        <img
                            src={paperPlaneUrl}
                            alt="submit button"
                            className={isEmpty || !isValid ? 'opacity-50' : 'opacity-100'}
                        />
                    </button>
                </div>
            </div>
            <div className={`mt-[0.563rem] flex justify-center ${isEmpty || isValid ? 'hidden' : ''}`}>
                <div className="w-[31.25rem] pl-4 text-left font-exo-2 font-light tracking-[-0.015rem] text-[#ff6633]">
                    Please enter a valid email!
                </div>
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

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function validateEmail(string: string) {
        const regexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g;

        return regexp.test(string);
    }
}
