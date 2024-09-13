import StyleAddressItem from "./AddressItem.module.scss"
import {ButtonApp} from "@/shared/ui/Button/ButtonApp.jsx";
import saveAddress from "@/features/address/api/saveAddress.js";

export default function AddressItem({ address }) {

    const handleSaveAddress = (async () => {
        await saveAddress({
            country: address.country,
            postal_code: address.postal_code,
            region: address.region,
            city: address.city,
            federal_district: address.federal_district,
        });
    })

    if (!address.country && !address.city && !address.federal_district && !address.region && !address.postal_code) {
        return <div>Ничего не найдено</div>;
    }

    return (
        <article className={StyleAddressItem['address-item']}>
            <div className={StyleAddressItem['address-item__info']}>
                {address.country && (
                    <div className={StyleAddressItem['address-item__info-item']}>
                        <strong>Страна:</strong> {address.country}
                    </div>
                )}
                {address.city && (
                    <div className={StyleAddressItem['address-item__info-item']}>
                        <strong>Город:</strong> {address.city}
                    </div>
                )}
                {address.federal_district && (
                    <div className={StyleAddressItem['address-item__info-item']}>
                        <strong>Федеральный округ:</strong> {address.federal_district}
                    </div>
                )}
                {address.region && (
                    <div className={StyleAddressItem['address-item__info-item']}>
                        <strong>Регион:</strong> {address.region}
                    </div>
                )}
                {address.postal_code && (
                    <div className={StyleAddressItem['address-item__info-item']}>
                        <strong>Почтовый индекс:</strong> {address.postal_code}
                    </div>
                )}
            </div>
            <ButtonApp onClick={handleSaveAddress} text="Сохранить адрес" />
        </article>
    );
}