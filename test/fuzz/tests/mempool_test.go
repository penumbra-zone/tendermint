//go:build gofuzz || go1.18

package tests

import (
	"context"
	"testing"

	abciclient "github.com/penumbra-zone/tendermint/abci/client"
	"github.com/penumbra-zone/tendermint/abci/example/kvstore"
	"github.com/penumbra-zone/tendermint/config"
	"github.com/penumbra-zone/tendermint/internal/mempool"
	"github.com/penumbra-zone/tendermint/libs/log"
)

func FuzzMempool(f *testing.F) {
	app := kvstore.NewApplication()
	logger := log.NewNopLogger()
	conn := abciclient.NewLocalClient(logger, app)
	err := conn.Start(context.TODO())
	if err != nil {
		panic(err)
	}

	cfg := config.DefaultMempoolConfig()
	cfg.Broadcast = false

	mp := mempool.NewTxMempool(logger, cfg, conn)

	f.Fuzz(func(t *testing.T, data []byte) {
		_ = mp.CheckTx(context.Background(), data, nil, mempool.TxInfo{})
	})
}
