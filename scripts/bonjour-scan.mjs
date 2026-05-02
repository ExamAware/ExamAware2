#!/usr/bin/env node
import { Bonjour } from 'bonjour-service'

const bonjour = new Bonjour()

console.log('[scan] starting scan for type "examaware"')
const seen = new Map()

const browser = bonjour.find({ type: 'examaware' })

browser.on('up', (service) => {
  const host =
    service.addresses?.find((a) => a.includes('.')) || service.host || 'localhost'
  const id = service.fqdn || `${host}:${service.port}`
  seen.set(id, {
    name: service.name,
    host,
    port: service.port,
    addresses: service.addresses,
    txt: service.txt
  })
  console.log('[scan] up', seen.get(id))
})

browser.on('down', (service) => {
  const host =
    service.addresses?.find((a) => a.includes('.')) || service.host || 'localhost'
  const id = service.fqdn || `${host}:${service.port}`
  seen.delete(id)
  console.log('[scan] down', { id, host, port: service.port })
})

browser.on('error', (err) => {
  console.error('[scan] browser error', err)
})

setTimeout(() => {
  console.log('[scan] summary', Array.from(seen.values()))
  browser.stop()
  bonjour.destroy()
}, 12000)
