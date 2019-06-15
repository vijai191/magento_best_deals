/**
 * GiaPhuGroup Co., Ltd.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the GiaPhuGroup.com license that is
 * available through the world-wide-web at this URL:
 * https://www.giaphugroup.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    PHPCuong
 * @package     PHPCuong_HotDeals
 * @copyright   Copyright (c) 2018-2019 GiaPhuGroup Co., Ltd. All rights reserved. (http://www.giaphugroup.com/)
 * @license     https://www.giaphugroup.com/LICENSE.txt
 */

var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'PHPCuong_HotDeals/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'PHPCuong_HotDeals/js/view/shipping-payment-mixin': true
            }
        }
    }
}
