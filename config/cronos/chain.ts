import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

//  VVS Factory Address
export const FACTORY_ADDRESS = '0x3B44B2a187a7b3824131F8db5a74194D0a42Fc15'

//  Reference Token (WCRO)
export const REFERENCE_TOKEN = '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23' // WCRO

//  Stable Token Pairs (example: WCRO–USDC, WCRO–USDT)
export const STABLE_TOKEN_PAIRS = [
  '0xc21223249ca28397b4b6541dffaecc539bff0c59', // USDC
  '0x66e428c3f67a68878562e79a0234c1f83c208770', // USDT
]

//  Whitelist tokens - tokens to track volume and liquidity for
export const WHITELIST: string[] = [
  '0x5C7F8A570d578ED84E63fdFA7b1eE72deae1AE23', // WCRO
  '0xc21223249ca28397b4b6541dffaecc539bff0c59', // USDC
  '0x66e428c3f67a68878562e79a0234c1f83c208770', // USDT
  '0xf2001b145b43032aaf5ee2884e456ccd805f677d', // DAI
  '0x062E66477Faf219F25D27dCED647BF57C3107d52', // WBTC
  '0xe44Fd7fCb2b1581822D0c862B68222998a0c299a', // WETH
]

//  Stablecoins for price reference
export const STABLECOINS = [
  '0xc21223249ca28397b4b6541dffaecc539bff0c59', // USDC
  '0x66e428c3f67a68878562e79a0234c1f83c208770', // USDT
  '0xf2001b145b43032aaf5ee2884e456ccd805f677d', // DAI
]

//  Minimum liquidity required to count towards tracked volume for small pairs
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('5000')

//  Minimum liquidity (in CRO) for price tracking
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('1')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const SKIP_TOTAL_SUPPLY: string[] = []
