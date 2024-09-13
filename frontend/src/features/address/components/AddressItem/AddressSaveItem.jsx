import StyleAddressItem from "./AddressItem.module.scss"

export default function AddressSaveItem({ address }) {
    return (
        <article className={StyleAddressItem['address-item']}>
            <h2 className={StyleAddressItem['address-item__title']}>Cохраненный адрес</h2>
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
        </article>
    );
}