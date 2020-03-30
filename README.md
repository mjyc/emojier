# Emojier

Put those d@m emojis on your writings

```
npm install --global emojier
cat writing.txt | emojier
```

See [options](./cli.js#L5-8).

## Not-so Vim Integration

Open a text file, e.g., `vim {filename}`, and run

```
:%! emojier
```

Thanks [stackexchange](https://vi.stackexchange.com/questions/5835/how-to-run-bash-command-over-current-file-and-replace-buffer-with-result).
