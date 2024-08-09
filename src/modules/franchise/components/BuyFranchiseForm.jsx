import React from 'react';
import { useForm } from 'react-hook-form';
import {useTranslation} from "react-i18next";
import {FaArrowAltCircleRight} from "react-icons/fa";

const BuyFranchiseForm = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <label className='block mb-2'>
                            {t("Ism")} <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('name', {required: true})}
                        />
                        {errors.name && <p className='text-red-600'>{t("Ism majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Telefon raqami")} <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='tel'
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('phone', {required: true})}
                        />
                        {errors.phone && <p className='text-red-600'>{t("Telefon raqami majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Familiya")} <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('fullName', {required: true})}
                        />
                        {errors.fullName && <p className='text-red-600'>{t("Familiya majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("E - mail")} <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='email'
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('email', {required: true})}
                        />
                        {errors.email && <p className='text-red-600'>{t("E - mail majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Shahar")} <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('city', {required: true})}
                        />
                        {errors.city && <p className='text-red-600'>{t("Shahar majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Aloqaning eng yaxshi vaqti")} <span className='text-red-600'>*</span>
                        </label>
                        <select
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('contactTime', {required: true})}
                        >
                            <option value='Ertalab'>{t("Ertalab")}</option>
                            <option value='Kechqurun'>{t("Kechqurun")}</option>
                        </select>
                        {errors.contactTime &&
                            <p className='text-red-600'>{t("Aloqaning eng yaxshi vaqti majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Professional holat")} <span className='text-red-600'>*</span>
                        </label>
                        <select
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('professionalStatus', {required: true})}
                        >
                            <option value='xodim'>{t("Xodim")}</option>
                            <option value='rahbar'>{t("Rahbar")}</option>
                        </select>
                        {errors.professionalStatus &&
                            <p className='text-red-600'>{t("Professional holat majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Faoliyat sohasi")} <span className='text-red-600'>*</span>
                        </label>
                        <select
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('industry', {required: true})}
                        >
                            <option value="ta'lim">{t("Ta'lim")}</option>
                            <option value='texnologiya'>{t("Texnologiya")}</option>
                            <option value="sog'liqni-saqlash">{t("Sog'liqni saqlash")}</option>
                        </select>
                        {errors.industry && <p className='text-red-600'>{t("Faoliyat sohasi majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Ochilishning taxminiy vaqti")} <span className='text-red-600'>*</span>
                        </label>
                        <select
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('openingTime', {required: true})}
                        >
                            <option value='1'>1 {t("oy")}</option>
                            <option value='3'>3 {t("oy")}</option>
                            <option value='6'>6 {t("oy")}</option>
                        </select>
                        {errors.openingTime &&
                            <p className='text-red-600'>{t("Ochilishning taxminiy vaqti majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Sizda joy bormi?")} <span className='text-red-600'>*</span>
                        </label>
                        <select
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('hasLocation', {required: true})}
                        >
                            <option value='ha'>{t("Ha")}</option>
                            <option value='yoq'>{t("Yo'q")}</option>
                        </select>
                        {errors.hasLocation && <p className='text-red-600'>{t("Joy majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Yangi biznesga qancha vaqt ajratasiz?")} <span className='text-red-600'>*</span>
                        </label>
                        <select
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('timeCommitment', {required: true})}
                        >
                            <option value='25%'>25%</option>
                            <option value='50%'>50%</option>
                            <option value='75%'>75%</option>
                        </select>
                        {errors.timeCommitment && <p className='text-red-600'>{t("Vaqt ajratish majburiy")}</p>}
                    </div>
                    <div>
                        <label className='block mb-2'>
                            {t("Investitsiyalar uchun mavjud bo'lgan miqdor")} <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            className='w-full px-4 py-2 text-black border rounded outline-none'
                            {...register('investmentAmount', {required: true})}
                        />
                        {errors.investmentAmount &&
                            <p className='text-red-600'>{t("Investitsiyalar miqdori majburiy")}</p>}
                    </div>
                </div>
                <div>
                    <label className='block mb-2'>
                        {t("Xabar")}
                    </label>
                    <textarea
                        className='w-full px-4 py-2 text-black border rounded outline-none'
                        rows='4'
                        {...register('message')}
                    ></textarea>
                </div>
                <div className='flex items-start'>
                    <input
                        type='checkbox'
                        className='mr-2 mt-1'
                        {...register('gdpr', { required: true })}
                    />
                    <p className='text-[15px] font-normal'>
                        {t("Ushbu shaklni to'ldirish orqali men FasTrackKids faoliyati doirasida ro'yxatdan o'tishni yakunlash maqsadida shaxsiy ma'lumotlarimni to'plash va olishga rozilik bildiraman.")}
                    </p>
                </div>
                <div>
                    <button
                        type='submit'
                        className='w-full py-4 px-7 bg-purple hover:bg-white hover:text-purple transition text-white rounded outline-none flex items-center justify-between'
                    >
                        <span className='ml-2'>{t("yuborish")}</span>
                        <FaArrowAltCircleRight/>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BuyFranchiseForm;
