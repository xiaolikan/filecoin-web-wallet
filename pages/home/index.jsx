import { WalletView } from '../../components'

import RenderChildrenIfWalletConnected from '../../lib/RequireWallet'
import useDesktopBrowser from '../../lib/useDesktopBrowser'

export default () => {
  useDesktopBrowser()
  return (
    <RenderChildrenIfWalletConnected>
      <WalletView />
    </RenderChildrenIfWalletConnected>
  )
}
