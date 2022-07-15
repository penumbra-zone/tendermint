package blocksync

import (
	bcproto "github.com/penumbra-zone/tendermint/proto/tendermint/blocksync"
	"github.com/penumbra-zone/tendermint/types"
)

const (
	MaxMsgSize = types.MaxBlockSizeBytes +
		bcproto.BlockResponseMessagePrefixSize +
		bcproto.BlockResponseMessageFieldKeySize
)
